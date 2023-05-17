import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  useGetAllCohortQuery,
  useGetAllCohortStudentsQuery,
} from '../../features/cohort/cohortApi';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Button } from '@mui/material';
import { useChangeStudentsTypeMutation } from '../../features/student/studentApi';
import { useConvertToAlumniMutation } from '../../features/alumni/alumniApi';
import toast, { Toaster } from 'react-hot-toast';

function MigrateByStudent() {
  const [cohort, setCohort] = useState('');
  const [migration, setMigration] = useState('');
  const [students, setStudents] = useState([]);

  const [student, setStudent] = useState('');

  const { data: cohorts, isSuccess: isCohortsSuccess } = useGetAllCohortQuery();
  const { data: cohortStudents, isSuccess: isStudentFetchSuccess } =
    useGetAllCohortStudentsQuery(cohort);
  const [
    changeStudentType,
    { isSuccess: isStudentTypeChangeSuccess, error: changeStudentTypeError },
  ] = useChangeStudentsTypeMutation();
  const [
    convertToAlumni,
    { isSuccess: isConvertToAlumniSuccess, error: convertToAlumniError },
  ] = useConvertToAlumniMutation();

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
    if (migration === 'alumni') {
      const data = { ids: [student] };
      convertToAlumni(data);
    } else {
      const data = { ids: [student], type: migration };
      changeStudentType(data);
    }
  };

  useEffect(() => {
    if (isConvertToAlumniSuccess) {
      toast.success('Student converted to alumni successfully');
      setStudent('');
      setMigration('');
    }
    if (convertToAlumniError) {
      toast.error(convertToAlumniError.data.message);
    }
  }, [isConvertToAlumniSuccess, convertToAlumniError]);

  useEffect(() => {
    if (isStudentTypeChangeSuccess) {
      toast.success('Student type changed successfully');
      setStudent('');
      setMigration('');
    }
    if (changeStudentTypeError) {
      toast.error(changeStudentTypeError.data.message);
    }
  }, [isStudentTypeChangeSuccess, changeStudentTypeError]);

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
                  <MenuItem key={index} value={cohort.cohortName}>
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
                  <MenuItem key={index} value={student?._id}>
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
            <InputLabel>Migrate to</InputLabel>
            <Select
              value={migration}
              label="Select Cohort"
              onChange={handleMigrationChange}
            >
              <MenuItem value="junior">Junior</MenuItem>
              <MenuItem value="senior">Senior</MenuItem>
              <MenuItem value="alumni">Alumni</MenuItem>
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

export default MigrateByStudent;
