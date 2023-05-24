const mongoose = require('mongoose');
const softTechSkill = require('../student/schemas/softTechSkills.schema');

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  about: {
    type: String,
  },
  education: [
    {
      instituteName: {
        type: String,
      },
      program: {
        type: String,
      },
      fromDate: {
        type: Date,
      },
      toDate: {
        type: Date,
      },
      description: {
        type: String,
      },
      status: {
        type: Boolean,
      },
      gpa: {
        type: Number,
      },
    },
  ],
  experiences: [
    {
      jobTitle: {
        type: String,
      },
      companyName: {
        type: String,
      },
      fromDate: {
        type: Date,
      },
      toDate: {
        type: Date,
      },
      description: {
        type: String,
      },
      skills: [String],
      status: {
        type: Boolean,
      },
    },
  ],
  skills: [softTechSkill],
  certifications: [
    {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  onlineJudge: [
    {
      name: {
        type: String,
      },
      username: {
        type: String,
      },
      isVerified: {
        type: Boolean,
      },
    },
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
  socialLinks: [
    {
      name: String,
      url: String,
    },
  ],
  stack: {
    type: String,
  },
});
const Alumni = mongoose.model('Alumni', alumniSchema);
module.exports = Alumni;
