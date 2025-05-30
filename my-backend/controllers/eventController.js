const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");

const createEvent = asyncHandler(async (req, res) => {
  const { title, description, location, date, tags, imageUrl } = req.body;

  if (!title || !description || !location || !date) {
    res.status(400);
    throw new Error('Please provide all required fields');
  }

  const event = await Event.create({
    title,
    description,
    location,
    date,
    tags,
    imageUrl,
  });

  res.status(201).json(event);
});


const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find().sort({ date: 1 }); // sorted by date ascending
  res.status(200).json(events);
});

module.exports = { createEvent, getEvents };
