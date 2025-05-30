const express = require('express');
const router = express.Router();
const { postComment, getComments } = require('../controllers/commentController');
const {protect} = require('../Middlewares/auth');

router.post('/', protect, postComment);
router.get('/:eventId', getComments);

module.exports = router;
