require('dotenv').config();

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

try {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('🍀  MongoDB connected');
} catch (err) {
  console.error('Error connecting to MongoDB:', err.message);
}

module.exports = mongoose;
