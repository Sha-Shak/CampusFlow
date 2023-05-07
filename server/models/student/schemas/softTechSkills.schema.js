const mongoose = require('mongoose');
const softTechSkill = new mongoose.Schema({
  skill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
  },
  marks: Number,
});

module.exports = softTechSkill;
