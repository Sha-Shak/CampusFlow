const mongoose = require('mongoose');
const TestSchema = new mongoose.Schema({
  marks: {
    type: Number,
    required: true,
  },
  weekName: {
    type: String,
    required: true,
  },
});
module.exports = TestSchema;
