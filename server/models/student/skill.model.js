const mongoose = require('mongoose');
const SkillSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: [String], // softskill, techskill
  },
  studentType: {
    type: [String], //junior, senior, alumni
  },
  stack: {
    type: [String], //frontend, backend, testing
  },
});
const Skill = mongoose.model('Skill', SkillSchema);
module.exports = Skill;
