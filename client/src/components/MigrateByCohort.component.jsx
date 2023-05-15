import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useGetAllCohortQuery } from '../features/cohort/cohortApi';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Button } from '@mui/material';
function MigrateByCohort() {
  const [cohort, setCohort] = useState('');
  const [migration, setMigration] = useState('');

  const { data: cohorts, isSuccess: isCohortsSuccess } = useGetAllCohortQuery();
  const handleCohortChange = (event) => {
    setCohort(event.target.value);
  };
  const handleMigrationChange = (event) => {
    setMigration(event.target.value);
  };

  return (
    <>
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
        <Button variant="contained" sx={{ width: '200px', height: '40px' }}>
          {' '}
          Migrate{' '}
        </Button>
      </div>
    </>
  );
}

export default MigrateByCohort;
