const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  githubUsername: {
    type: String,
    required: true,
  },

  // user, student, alumni, admin, hr are separate entities
  // student: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Student',
  // },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
