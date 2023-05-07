const mongoose = require('mongoose');

const formResponseSchema = new mongoose.Schema({
  form_id: String,
  submitted_at: Date,
  answers: [
    {
      field: String,
      answer: String,
    },
  ],
});
const FormResponse = mongoose.model('FormResponse', formResponseSchema);
module.exports = FormResponse;
