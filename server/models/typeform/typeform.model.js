const mongoose = require('mongoose');

const formResponseSchema = new mongoose.Schema({
  form_id: String,
  submitted_at: Date,
<<<<<<< Updated upstream
  answers: [
    {
      field: String,
      answer: String,
    },
  ],
=======
  //   answers: [
  //     {
  //       field: String,
  //       answer: String,
  //     },
  //   ],
  name: String,
  email: String,
  phone: String,
>>>>>>> Stashed changes
});
const FormResponse = mongoose.model('FormResponse', formResponseSchema);
module.exports = FormResponse;
