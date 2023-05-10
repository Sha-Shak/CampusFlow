const mongoose = require('mongoose');

const CohortSchema = new mongoose.Schema({
  cohortName: {
    type: String,
  },
  jrStartDate: {
    type: Date,
  },
  srStartDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['jrActive', 'srActive'],
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
});

const Cohort = mongoose.model('Cohort', CohortSchema);
module.exports = Cohort;
