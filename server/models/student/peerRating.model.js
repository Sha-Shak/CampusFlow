const mongoose = require('mongoose');
const peerRating = new mongoose.Schema({
  givenBy: {
    type: String,
    required: true,
    ref: 'Student',
  },
  givenTo: {
    type: String,
    required: true,
    ref: 'Student',
  },
  rate: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  count: {
    type: Number,
    default: 1,
  },
});

const PeerRating = mongoose.model('PeerRating', peerRating);
module.exports = PeerRating;
