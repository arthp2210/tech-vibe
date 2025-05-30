// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
   imageUrl: {
    type: String
  },

});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
