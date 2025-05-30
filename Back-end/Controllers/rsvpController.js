const RSVP = require('../models/rsvpModel');

const createRSVP = async (req, res) => {
  try {
    const { status,eventId } = req.body;

    if (!status) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Optional: Upsert logic (update if already exists)
    const existing = await RSVP.findOne({ eventId });
    if (existing) {
      existing.status = status;
      await existing.save();
      return res.status(200).json({ message: 'RSVP updated', rsvp: existing });
    }

    const rsvp = new RSVP({ eventId,status });
    await rsvp.save();
    res.status(201).json({ message: 'RSVP saved', rsvp });

  } catch (error) {
    console.error('RSVP Save Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
module.exports = { createRSVP };
