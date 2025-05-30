const express = require('express');
const router = express.Router();
const { postComment, getComments } = require('../controllers/commentController');
const {protect} = require('../middleware/auth');

router.post('/', protect, postComment);
router.get('/:eventId', getComments);

module.exports = router;
