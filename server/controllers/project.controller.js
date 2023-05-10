const Project = require('../models/student/projects.model');

const addProject = async (req, res) => {
  // TODO: Replace id with Alumni Id
  const { id } = req.params;
  try {
    const {
      projectName,
      type,
      description,
      githubLink,
      projectLink,
      techStack,
      thirdPartyApi,
    } = req.body;

    const newProject = new Project({
      projectName,
      type,
      description,
      githubLink,
      projectLink,
      techStack,
      thirdPartyApi,
      doneBy: id,
    });

    const savedProject = await newProject.save();
    res.status(200).json(savedProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProjects = async (req, res) => {
  const { id } = req.params;
  try {
    const projects = await Project.find({ doneBy: id });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addProject,
};
