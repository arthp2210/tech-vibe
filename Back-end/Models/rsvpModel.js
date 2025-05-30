// models/rsvpModel.js
const mongoose = require('mongoose');

const rsvpSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['going', 'interested', 'not going'],
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('RSVP', rsvpSchema);
