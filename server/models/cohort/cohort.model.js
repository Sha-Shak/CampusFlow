const mongoose = require('mongoose');

const CohortSchema = new mongoose.Schema({
  cohortName: {
    type: String,
    required: true,
    unique: true,
  },
  jrStartDate: {
    type: Date,
    required: true,
  },
  srStartDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['jrActive', 'srActive'],
  },
  students: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Student',
  },
});

const Cohort = mongoose.model('Cohort', CohortSchema);
module.exports = Cohort;
