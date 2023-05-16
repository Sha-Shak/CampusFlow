import React from 'react';
import AlumniLayout from '../components/alumniComponents/AlumniLayout';
import ProjectForm from '../components/alumniComponents/UpdateProfile/ProjectForm.component';
import Layout from '../components/common/Layout';

function AlumniUpdateProfile() {
  return (
    <AlumniLayout>
      <ProjectForm />
    </AlumniLayout>
  );
}

export default AlumniUpdateProfile;
