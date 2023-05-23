import React, { useState } from 'react';
import {
  TextField,
  Button,
  Modal,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import Layout from '../components/common/Layout';
import CertificationForm from '../components/alumniComponents/UpdateProfile/CertificationForm.component';
import ExperienceForm from '../components/alumniComponents/UpdateProfile/ExperienceForm.component';
import EducationForm from '../components/alumniComponents/UpdateProfile/EductaionForm.component';
import ProjectForm from '../components/alumniComponents/UpdateProfile/ProjectForm.component';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import CompanyNameAutocomplete from '../components/alumniComponents/UpdateProfile/AutoCompleteCompany';

function AlumniUpdateProfile() {
  const [openCertificate, setOpenCertificate] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [openExperience, setOpenExperience] = useState(false);
  const [openProject, setOpenProject] = useState(false);

  const handleCertificate = () => {
    setOpenCertificate(true);
  };
  const handleEducation = () => {
    setOpenEducation(true);
  };
  const handleExperience = () => {
    setOpenExperience(true);
  };
  const handleProject = () => {
    setOpenProject(true);
  };

  const handleClose = () => {
    setOpenCertificate(false);
    setOpenEducation(false);
    setOpenExperience(false);
  };

  return (
    <Layout>
      <div>
        <Button onClick={handleCertificate} variant="contained" color="primary">
          Add Certificate
        </Button>
        <Button onClick={handleEducation} variant="contained" color="primary">
          Add Education
        </Button>
        <Button onClick={handleExperience} variant="contained" color="primary">
          Add Experience
        </Button>
        <Button onClick={handleProject} variant="contained" color="primary">
          Add Project
        </Button>

        <Modal open={openCertificate} onClose={handleClose}>
          <Box
            sx={{
              borderRadius: '20px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <CertificationForm handleClose={handleClose} />
          </Box>
        </Modal>
        <Modal open={openEducation} onClose={handleClose}>
          <Box
            sx={{
              borderRadius: '20px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              display: 'flex',
              justifyContent: 'space-between', // Aligns items with space between them
            }}
          >
            <EducationForm handleClose={handleClose} />
          </Box>
        </Modal>
        <Modal open={openExperience} onClose={handleClose}>
          <Box
            sx={{
              borderRadius: '20px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              display: 'flex',
              justifyContent: 'space-between', // Aligns items with space between them
            }}
          >
            <ExperienceForm handleClose={handleClose} />
          </Box>
        </Modal>
      </div>

      <CompanyNameAutocomplete />
    </Layout>
  );
}

export default AlumniUpdateProfile;
