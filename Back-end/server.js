require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Routes import as an object
const routes = {
  user: require('./routes/authRoutes'),
  comment: require('./routes/commentRoutes'),
  rsvp: require('./routes/rsvpRoutes'),
  event: require('./routes/eventRoutes'),
};

const MONGO_URL = process.env.MONGO_URL;   // e.g. mongodb+srv://user:pass@cluster.mongodb.net
const DB_NAME = process.env.DB_NAME || 'default_db_name';

async function connectDB() {
  try {
    await mongoose.connect(`${MONGO_URL}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to database:', DB_NAME);
  } catch (err) {
    console.error('❌ Database connection failed:', err);
    process.exit(1); // Exit the app if DB connection fails
  }
}

// Connect to MongoDB before starting the app
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Register all routes dynamically
Object.entries(routes).forEach(([path, router]) => {
  app.use(`/api/${path}`, router);
});

// Health check endpoint
app.get('/', (req, res) => {
  res.send('✅ TechVibe backend is running!');
});

module.exports = app;
