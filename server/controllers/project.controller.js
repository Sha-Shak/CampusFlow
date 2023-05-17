const Project = require('../models/student/projects.model');
const Alumni = require('../models/alumni/alumni.model');

// you need to send alumni id in params
// this controller will post project to project model and add project id to alumni model
const addProject = async (req, res) => {
  const { id } = req.params; // this should be alumni id
  try {
    const {
      projectName,
      type,
      description,
      githubLink,
      projectLink,
      techStack,
      thirdPartyApi,
      youtubeLink,
    } = req.body;

    const newProject = new Project({
      projectName,
      type,
      description,
      githubLink,
      projectLink,
      techStack,
      thirdPartyApi,
      youtubeLink,
      doneBy: id,
    });

    const savedProject = await newProject.save();

    // findAlumnibyID
    const alumni = await Alumni.findById(id);
    alumni.projects.push(savedProject._id);
    await alumni.save();

    res.status(200).json(savedProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProjects = async (req, res) => {
  // id of doneby
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
  getProjects,
};
