const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  amenities: {
    type: [String],
    required: true
  }
}, { timestamps: true });

const Venue = mongoose.model('Venue', venueSchema);
module.exports = Venue;