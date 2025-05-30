const express = require('express');
const router = express.Router();
const { createRSVP } = require('../controllers/rsvpController');

router.post('/', createRSVP);

module.exports = router;
