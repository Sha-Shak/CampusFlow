const mongoose = require('mongoose');
const softTechSkill = require('./softTechSkills.schema');
const UnitMarksSchema = require('./unitMarks.schema');

const weekMarksSchema = new mongoose.Schema({
  weekName: {
    type: String,
    required: true,
  },
  softSkills: {
    type: [softTechSkill],
  },
  techSkills: {
    type: [softTechSkill],
  },
  assessmentMarks: {
    type: Number,
    required: true,
  },
  unitMarks: {
    type: [UnitMarksSchema],
    required: true,
  },
});

module.exports = weekMarksSchema;
