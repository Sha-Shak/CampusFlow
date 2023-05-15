const mongoose = require('mongoose');
const TestTypeSchema = require('./schemas/testType.schema');
const weekMarksSchema = require('./schemas/weekMarksSchema');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  profileImg: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    enum: ['junior', 'senior', 'alumni'],
    required: true,
  },
  cohortName: {
    type: String,
  },
  joiningDate: {
    type: Date,
  },
  githubUsername: {
    type: String,
  },
  githubMail: {
    type: String,
  },
  generalSkills: {
    type: [TestTypeSchema],
  },
  junior: {
    type: [weekMarksSchema],
  },
  senior: {
    type: [weekMarksSchema],
  },
  checkpoints: {
    type: [weekMarksSchema],
  },
  alumniId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alumni',
  },
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
