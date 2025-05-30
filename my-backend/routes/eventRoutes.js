const express = require('express');
const router = express.Router();
const { createEvent, getEvents } = require('../controllers/eventController');

router.post('/', createEvent);
router.get('/', getEvents); // <-- this line

module.exports = router;
