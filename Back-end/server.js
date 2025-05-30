const express = require('express');
const app = express();
// server.js
require('dotenv').config();

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
const cors = require('cors');
const MONGO_URL = process.env.MONGO_URL;
const http = require('http');
const socketio = require('socket.io');

const authRoutes = require('./routes/authRoutes');
const commentRoutes = require('./routes/commentRoutes');
const rsvpRoutes = require('./routes/rsvpRoutes');
const eventRoutes = require('./routes/eventRoutes');

// Create HTTP server and attach socket.io
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: [
      'http://localhost:8081', // Expo Web preview (dev)
      'http://localhost:19006', // Expo dev tools (web)
      'https://techvibe.vercel.app' // <== Replace with your real frontend domain
    ],
    credentials: true
  }
});

// Connect to MongoDB
mongoose.connect(MONGO_URL)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Database connection failed:", err));

// CORS middleware
app.use(cors);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/user', authRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/rsvp', rsvpRoutes);
app.use('/api/event', eventRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('✅ TechVibe backend is running!');
});

// WebSocket for real-time comments
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('comment', (data) => {
    io.emit(`comment:${data.eventId}`, data); // Broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start server
server.listen(port, () => {
  console.log(`Server is running`);
});
