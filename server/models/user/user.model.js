const mongoose = require('mongoose');
import { studentApi } from './../../../client/src/features/student/studentApi';

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
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
