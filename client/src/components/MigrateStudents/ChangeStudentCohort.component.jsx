import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  useChangeCohortMutation,
  useGetAllCohortQuery,
  useGetAllCohortStudentsQuery,
} from '../../features/cohort/cohortApi';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Button } from '@mui/material';

import toast, { Toaster } from 'react-hot-toast';
import {
  useAddStudentToGithubCohortMutation,
  useDeleteStudentFromCohortMutation,
} from '../../features/github/githubApi';

function ChangeCohort() {
  const [cohort, setCohort] = useState('');
  const [migration, setMigration] = useState('');
  const [students, setStudents] = useState([]);

  const [student, setStudent] = useState('');
  const { data: cohorts, isSuccess: isCohortsSuccess } = useGetAllCohortQuery();
  const {
    data: cohortStudents,
    isSuccess: isStudentFetchSuccess,
    refetch: refetchCohorts,
  } = useGetAllCohortStudentsQuery(cohort?.cohortName, {
    skip: !cohort,
  });
  const [changeCohort, { isSuccess: isChangeCohortSuccess }] =
    useChangeCohortMutation();

  const [addToCohort, { isSuccess: isAddToCohortSuccess }] =
    useAddStudentToGithubCohortMutation();
  const [deleteFromCohort, { isSuccess: isDeleteFromCohortSuccess }] =
    useDeleteStudentFromCohortMutation();

  useEffect(() => {
    if (isStudentFetchSuccess) {
      setStudents(cohortStudents.students);
    }
  }, [isStudentFetchSuccess]);
  const handleCohortChange = (event) => {
    setCohort(event.target.value);
  };
  const handleStudentChange = (event) => {
    setStudent(event.target.value);
  };
  const handleMigrationChange = (event) => {
    setMigration(event.target.value);
  };

  const handleMigrate = () => {
    handleCohortChangeinDB();
    console.log('Migrating');
    if (isChangeCohortSuccess) {
      console.log('successfully migrated');
    }
    const ghData = {
      gitHubUsername: student?.githubUsername,
      prevCohort: cohort?.cohortName,
      nextCohort: migration?.cohortName,
    };

    addToCohort({
      username: ghData.gitHubUsername,
      cohortName: ghData.nextCohort,
    });

    deleteFromCohort({
      username: ghData.gitHubUsername,
      cohortName: ghData.prevCohort,
    });
  };

  const handleCohortChangeinDB = () => {
    const dbData = {
      id: student?._id,
      currentCohortName: cohort?.cohortName,
      newCohortName: migration?.cohortName,
    };
    console.log(dbData);
    changeCohort(dbData);
    refetchCohorts();
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-column items-center justify-center gap-5 mt-10">
        <div>
          <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel>Select Cohort</InputLabel>
            <Select
              value={cohort}
              label="Select Cohort"
              onChange={handleCohortChange}
            >
              <MenuItem value="">
                <em>Select Cohort</em>
              </MenuItem>
              {isCohortsSuccess &&
                cohorts.map((cohort, index) => (
                  <MenuItem key={index} value={cohort}>
                    {cohort.cohortName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel>Select Student</InputLabel>
            <Select
              value={student}
              label="Select Cohort"
              onChange={handleStudentChange}
            >
              {isStudentFetchSuccess &&
                students.map((student, index) => (
                  <MenuItem key={index} value={student}>
                    {student?.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FaLongArrowAltRight size={30} color="#011023" />
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel>Select Cohort</InputLabel>
            <Select
              value={migration}
              label="Select Cohort"
              onChange={handleMigrationChange}
            >
              <MenuItem value="">
                <em>Select Cohort</em>
              </MenuItem>
              {isCohortsSuccess &&
                cohorts.map((cohort, index) => (
                  <MenuItem key={index} value={cohort}>
                    {cohort.cohortName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mt-5">
        <Button
          variant="contained"
          sx={{ width: '200px', height: '40px' }}
          onClick={handleMigrate}
        >
          Migrate
        </Button>
      </div>
    </>
  );
}

export default ChangeCohort;
