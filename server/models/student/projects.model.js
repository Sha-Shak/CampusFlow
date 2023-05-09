const mongoose = require('mongoose');
const project = new mongoose.Schema({
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
  ratigns: {
    type: [
      {
        givenBy: {
          type: String,
          required: true,
        },
      },
    ],
  },
  category: {
    type: [String],
  },
});
const Skill = mongoose.model('Skill', SkillSchema);
module.exports = Skill;
