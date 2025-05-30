const Comment = require('../models/commentModel');

const postComment = async (req, res) => {
  const { eventId, text } = req.body;

  if (!text || !eventId) {
    return res.status(400).json({ message: 'Text and Event ID required' });
  }

  try {
    const newComment = await Comment.create({
      eventId: eventId,    // match schema field name
      user: req.user.id,   // user from token
      text,
    });

    res.status(201).json(newComment);
  } catch (err) {
    console.error('Comment creation error:', err);
    res.status(500).json({ message: 'Server error while posting comment' });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ eventId: req.params.eventId })  // filter on eventId
      .populate('user', 'name');  // populate user field, not userId

    res.json(comments);
  } catch (err) {
    console.error('Fetch comments error:', err);
    res.status(500).json({ message: 'Server error while fetching comments' });
  }
};

module.exports = { postComment, getComments };
