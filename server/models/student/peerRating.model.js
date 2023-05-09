const mongoose = require('mongoose');
const peerRating = new mongoose.Schema({
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
    default: 0,
  },
});

const PeerRating = mongoose.model('PeerRating', peerRating);
module.exports = PeerRating;
