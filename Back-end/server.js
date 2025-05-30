const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const commentRoutes = require('./routes/commentRoutes');
const rsvpRoutes = require('./routes/rsvpRoutes');
const eventRoutes = require('./routes/eventRoutes');

const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ Connected to database"))
  .catch((err) => console.error("❌ Database connection failed:", err));

// CORS middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/user', authRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/rsvp', rsvpRoutes);
app.use('/api/event', eventRoutes);

app.get('/', (req, res) => {
  res.send('✅ TechVibe backend is running!');
});

module.exports = app;
