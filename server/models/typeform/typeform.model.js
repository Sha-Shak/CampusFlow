const mongoose = require('mongoose');

const formResponseSchema = new mongoose.Schema({
  form_id: String,
  submitted_at: Date,
  name: String,
  email: String,
  phone: String,
});
const FormResponse = mongoose.model('FormResponse', formResponseSchema);
module.exports = FormResponse;
