import React, { useState } from 'react';
import axios from 'axios';

import {
  TextField,
  Button,
  Chip,
  Autocomplete,
  Divider,
  Typography,
  Box,
} from '@mui/material';
import AlumniLayout from '../AlumniLayout';
import CompanyNameAutocomplete from './AutoCompleteCompany';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('');
  const [description, setDescription] = useState('');
  const [githubRepoLink, setGithubRepoLink] = useState('');
  const [projectLiveLink, setProjectLiveLink] = useState('');
  const [techStack, setTechStack] = useState([]);
  const [thirdPartyApis, setThirdPartyApis] = useState([]);
  const [youtubeLink, setYoutubeLink] = useState('');
  const [youtubePreview, setYoutubePreview] = useState('');
  const [companyOptions, setCompanyOptions] = useState([]);

  const handleTechStackChange = (event, values) => {
    setTechStack(values);
  };

  const handleThirdPartyApiChange = (event, values) => {
    setThirdPartyApis(values);
  };

  const handleYoutubeLinkChange = (event) => {
    const url = event.target.value;
    setYoutubeLink(url);
    setYoutubePreview(getYoutubePreview(url));
  };

  const getYoutubePreview = (url) => {
    const videoId = url.split('v=')[1];

    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;

      return (
        <iframe
          width="320px"
          height="180px"
          src={embedUrl}
          title="YouTube Preview"
        />
      );
    }

    return null;
  };
  const handleReset = () => {
    setProjectName('');
    setProjectType('');
    setDescription('');
    setGithubRepoLink('');
    setProjectLiveLink('');
    setTechStack([]);
    setThirdPartyApis([]);
    setYoutubeLink('');
    setYoutubePreview('');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    const data = {
      projectName,
      projectType,
      description,
      githubRepoLink,
      projectLiveLink,
      techStack,
      thirdPartyApis,
      youtubeLink,
    };
    console.log(data);
    handleReset();
  };
  // console.log();
  return (
    <AlumniLayout>
      <div className="flex bg-white m-10 p-10 rounded-xl shadow-2xl">
        <div className="flex-[0.7]">
          <Divider>
            <Typography variant="h6">Add Project Info</Typography>
          </Divider>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Project Name"
              value={projectName}
              onChange={(event) => setProjectName(event.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="YouTube Link"
              value={youtubeLink}
              onChange={handleYoutubeLinkChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Project Type"
              value={projectType}
              onChange={(event) => setProjectType(event.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
              fullWidth
              multiline
              rows={1}
              margin="normal"
            />
            <TextField
              label="Github Repo Link"
              value={githubRepoLink}
              onChange={(event) => setGithubRepoLink(event.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Project Live Link"
              value={projectLiveLink}
              onChange={(event) => setProjectLiveLink(event.target.value)}
              fullWidth
              margin="normal"
            />
            <Autocomplete
              multiple
              options={['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']}
              value={techStack}
              onChange={handleTechStackChange}
              renderTags={(value, getTagProps) =>
                value.map((tech, index) => (
                  <Chip
                    key={index}
                    variant="outlined"
                    label={tech}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tech Stack"
                  placeholder="Select multiple"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <CompanyNameAutocomplete setThirdPartyApis={setThirdPartyApis} />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1rem',
              }}
            >
              <Button
                type="cancel"
                variant="contained"
                color="info"
                onClick={handleReset}
                sx={{ px: 5 }}
              >
                Reset Form
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ px: 5 }}
              >
                Add Project
              </Button>
            </Box>
          </form>
        </div>
        <div className="flex-[0.3] px-10">
          <Divider>
            <Typography variant="h6">Details</Typography>
          </Divider>
          <div>{youtubePreview}</div>
          <table className="table-auto">
            <tbody>
              {projectName && (
                <tr>
                  <td className="border px-4 py-2">Project Name</td>
                  <td className="border px-4 py-2">{projectName}</td>
                </tr>
              )}
              {projectType && (
                <tr>
                  <td className="border px-4 py-2">Project Type</td>
                  <td className="border px-4 py-2">{projectType}</td>
                </tr>
              )}
              {description && (
                <tr>
                  <td className="border px-4 py-2">Description</td>
                  <td className="border px-4 py-2">{description}</td>
                </tr>
              )}
              {youtubeLink && (
                <tr>
                  <td className="border px-4 py-2">Github Repo Link</td>
                  <td className="border px-4 py-2">{githubRepoLink}</td>
                </tr>
              )}
              {projectLiveLink && (
                <tr>
                  <td className="border px-4 py-2">Project Live Link</td>
                  <td className="border px-4 py-2">{projectLiveLink}</td>
                </tr>
              )}
              {techStack.length > 0 && (
                <tr>
                  <td className="border px-4 py-2">Tech Stack</td>
                  <td className="border px-4 py-2">{techStack.join(', ')}</td>
                </tr>
              )}
              {thirdPartyApis.length > 0 && (
                <tr>
                  <td className="border px-4 py-2">Third Party APIs</td>
                  <td className="border px-4 py-2">
                    {thirdPartyApis.join(', ')}
                  </td>
                </tr>
              )}
              {youtubeLink && (
                <tr>
                  <td className="border px-4 py-2">YouTube Link</td>
                  <td className="border px-4 py-2">{youtubeLink}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AlumniLayout>
  );
};

export default ProjectForm;
