// server.js
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const commentRoutes = require('./routes/commentRoutes');
const rsvpRoutes = require('./routes/rsvpRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME || 'default_db';

// Connect to MongoDB
mongoose.connect(`${MONGO_URL}/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(`✅ Connected to database: ${DB_NAME}`))
.catch(err => {
  console.error('❌ Database connection failed:', err);
  process.exit(1);
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/user', authRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/rsvp', rsvpRoutes);
app.use('/api/event', eventRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('✅ TechVibe backend is running!');
});

module.exports = app;   // Notice: no app.listen here
