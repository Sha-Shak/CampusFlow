const mongoose = require('mongoose');
const TestSchema = require('./test.schema');

const TestTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tests: {
    type: [TestSchema],
    required: true,
  },
});
module.exports = TestTypeSchema;
