const mongoose = require('mongoose');
const UnitMarksSchema = new mongoose.Schema({
  unitName: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

module.exports = UnitMarksSchema;
