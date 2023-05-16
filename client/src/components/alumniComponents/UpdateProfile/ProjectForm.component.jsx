import React, { useState } from 'react';
import axios from 'axios';

import { TextField, Button, Chip, Autocomplete } from '@mui/material';

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
  const fetchCompanyOptions = async (inputValue) => {
    try {
      const response = await axios.get(
        `https://api.crunchbase.com/api/v4/autocompletes?query=${inputValue}&limit=5`,
        {
          headers: {
            'X-cb-user-key': 'dac921985bd65b314f51f2314be8ac01',
          },
        }
      );

      const companies = response.data.data.items;
      const companyNames = companies.map((company) => company.properties.name);

      // Update state with fetched company name options
      setCompanyOptions(companyNames);
    } catch (error) {
      console.error('Error fetching company names:', error);
    }
  };
  const getYoutubePreview = (url) => {
    // Extract the video ID from the YouTube link
    const videoId = url.split('v=')[1];

    if (videoId) {
      // Create the embed URL for the YouTube video
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;

      // Return an iframe element with the embedded video
      return (
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube Preview"
        />
      );
    }

    return null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Perform form submission logic here

    // Reset form fields after submission
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

  return (
    <div className="bg-white m-10 p-10 rounded-xl shadow-2xl">
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
          rows={4}
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

        <Autocomplete
          multiple
          options={companyOptions}
          freeSolo
          onInputChange={(event, value) => fetchCompanyOptions(value)}
          value={thirdPartyApis}
          onChange={handleThirdPartyApiChange}
          renderTags={(value, getTagProps) =>
            value.map((api, index) => (
              <Chip
                key={index}
                variant="outlined"
                label={api}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="ThirdParty API"
              placeholder="Start typing..."
              fullWidth
              margin="normal"
            />
          )}
        />

        <TextField
          label="YouTube Link"
          value={youtubeLink}
          onChange={handleYoutubeLinkChange}
          fullWidth
          margin="normal"
        />

        <div>{youtubePreview}</div>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProjectForm;
