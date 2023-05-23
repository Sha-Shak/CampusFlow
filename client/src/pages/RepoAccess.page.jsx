import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Layout from '../components/common/Layout';
import {
  useGetAccessToGithubRepoMutation,
  useGetAllGithubCohortsQuery,
  useGetGithubOrgReposQuery,
  useRemoveAccessToGithubRepoMutation,
} from '../features/github/githubApi';
import toast, { Toaster } from 'react-hot-toast';

const repoTypes = [
  { value: 'all', label: 'All' },
  { value: 'tp', label: 'Toy Problems' },
  { value: 'exercise', label: 'Exercises' },
  { value: 'weekly-assessment', label: 'Weekly Assessments' },
];
const RepoAccess = () => {
  const [cohort, setCohort] = useState('');
  const [repoType, setRepoType] = useState('');
  const [repoName, setRepoName] = useState('');
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);

  const {
    data: cohorts,
    isCohortsLoading,
    error: cohortsError,
  } = useGetAllGithubCohortsQuery();

  const {
    data: repositeories,
    isSuccess: isReposSuccess,
    error: reposError,
  } = useGetGithubOrgReposQuery();
  const [giveAccess, { isSuccess: isGiveAccessSuccess }] =
    useGetAccessToGithubRepoMutation();
  const [removeAccess, { isSuccess: isRemoveAccessSuccess }] =
    useRemoveAccessToGithubRepoMutation();
  useEffect(() => {
    if (isGiveAccessSuccess) {
      toast.success('Access Given Successfully');
    }
  }, [isReposSuccess]);

  useEffect(() => {
    if (isRemoveAccessSuccess) {
      toast.success('Access Removed Successfully');
    }
  }, [isRemoveAccessSuccess]);

  const handleCohortChange = (event) => {
    setCohort(event.target.value);
  };

  const handleRepoTypeChange = (event) => {
    const value = event.target.value;
    setRepoType(value);
    filterRepos(value);
  };

  const handleRepoNameChange = (event) => {
    setRepoName(event.target.value);
  };
  useEffect(() => {
    if (isGiveAccessSuccess) {
      getRepos();
    }
  }, [isGiveAccessSuccess]);

  useEffect(() => {
    if (isRemoveAccessSuccess) {
      getRepos();
    }
  }, [isRemoveAccessSuccess]);

  const handleGiveAccess = () => {
    const data = {
      teamSlug: cohort,
      repoName: repoName,
    };
    giveAccess(data);
    setCohort('');
    setRepoType('');
    setRepoName('');
  };

  const handleRemoveAccess = () => {
    const data = {
      teamSlug: cohort,
      repoName: repoName,
    };
    removeAccess(data);
    setCohort('');
    setRepoType('');
    setRepoName('');
  };
  function filterRepos(filterTag) {
    let newSelection;
    if (filterTag === 'tp') {
      newSelection = repos.filter((repo) => repo?.name.slice(0, 3) === 'tp-');
    } else {
      newSelection = repos.filter((repo) => repo?.name.includes(filterTag));
    }
    newSelection.length
      ? setFilteredRepos(newSelection)
      : setFilteredRepos(repositeories);
  }

  async function getRepos() {
    try {
      const parsedRepos = repositeories.filter((repo) => {
        const { name } = repo;
        if (
          name.includes('tp') ||
          name.includes('assessment') ||
          name.includes('exercise') ||
          name.includes('pre-course') ||
          name.includes('student-handbook') ||
          name.includes('proposal')
        )
          return true;
        if (
          name.includes('software-engineering-lectures') ||
          name.includes('code-review')
        )
          return true;
        return false;
      });

      setRepos(parsedRepos);
      setFilteredRepos(parsedRepos);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          bgcolor: 'white',
          height: '80vh',
          borderRadius: '20px',
          padding: '20px',
        }}
      >
        <Toaster />
        <Typography variant="h5">Repo Access</Typography>

        {/* All Drop down are in the box */}
        <Box gap={2}>
          {/* Cohort Dropdown */}
          <Box marginTop={2}>
            <TextField
              select
              label="Cohort Name"
              value={cohort}
              onChange={handleCohortChange}
              fullWidth
            >
              {cohorts?.map((cohort) => (
                <MenuItem key={cohort?.name} value={cohort?.name}>
                  {cohort?.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          {/* Cohort Dropdown finshed */}

          {/* Repo Type Dropdown */}
          <Box marginTop={2}>
            <TextField
              select
              value={repoType}
              label="Repo Type"
              onChange={handleRepoTypeChange}
              fullWidth
            >
              {repoTypes.map((type) => (
                <MenuItem key={type?.value} value={type?.value}>
                  {type?.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          {/* Repo Type Dropdown finshed */}

          {/* Repo Name Dropdown */}
          <Box marginTop={2}>
            <TextField
              select
              label="Repo Name"
              value={repoName}
              onChange={handleRepoNameChange}
              fullWidth
            >
              {filteredRepos?.map((repo) => (
                <MenuItem key={repo?.name} value={repo?.name}>
                  {repo?.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          {/* Repo Name Dropdown finshed */}

          {/* Button */}
          <Box
            display="flex"
            justifyContent="space-between"
            marginTop={2}
            gap={2}
            marginBottom={2}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleGiveAccess}
            >
              Give Access
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleRemoveAccess}
            >
              Remove Access
            </Button>
          </Box>
          {/* Button finshed */}
        </Box>
      </Box>
    </Layout>
  );
};

export default RepoAccess;
