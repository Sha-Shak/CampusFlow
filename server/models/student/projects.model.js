const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  githubLink: {
    type: String,
  },
  projectLink: {
    type: String,
  },
  techStack: {
    type: [String],
  },
  thirdPartyApi: {
    type: [String],
  },
  // TODO: Replace ref with Alumni model
  doneBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  ratigns: {
    type: [
      {
        givenBy: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
      },
    ],
  },
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
