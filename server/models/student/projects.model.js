const mongoose = require('mongoose');
const { schema } = require('./skill.model');
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
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
      },
    ],
  },
});
const Skill = mongoose.model('Skill', SkillSchema);
module.exports = Skill;
